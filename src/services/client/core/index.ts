import ky, { BeforeRetryHook, HTTPError } from "ky";
import { tokenKeys } from "@/constants/auth";
import { redirect } from "next/navigation";

const DEFAULT_API_RETRY_LIMIT = 2;

// TODO: 클라이언트측 토큰관리와 연결
const clientApi = ky.create({ prefixUrl: "https://api.freebe.co.kr/" });

export default clientApi;
