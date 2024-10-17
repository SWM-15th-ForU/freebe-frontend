module.exports = {
  apps: [
    {
      name: "freebe3000",
      script: "npm",
      args: "start",
      instances: "1",
      exec_mode: "cluster",
      merge_logs: true,
    },
  ],
};
