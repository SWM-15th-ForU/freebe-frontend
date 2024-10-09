"use client";

import React, { Component, ErrorInfo } from "react";
import * as Sentry from "@sentry/nextjs";
import ErrorFallback from "@/app/error-fallback";

interface Props {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  Props,
  ErrorBoundaryState
> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false, error: null };

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === "production") {
      Sentry.withScope((scope) => {
        scope.setExtra("componentStack", errorInfo);
        Sentry.captureException(error);
      });
    }
  }

  resetErrorBoundary() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    const { error, hasError } = this.state;
    const { children } = this.props;

    if (error && hasError) {
      return (
        <ErrorFallback
          error={error}
          reset={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return children;
  }
}
