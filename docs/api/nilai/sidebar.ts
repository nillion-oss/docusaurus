import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/nilai/nilai",
    },
    {
      type: "category",
      label: "Attestation",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-attestation-v-1-attestation-report-get",
          label: "Get Attestation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "doc",
          id: "api/nilai/chat-completion-v-1-chat-completions-post",
          label: "Chat Completion",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "api/nilai/health-check-v-1-health-get",
          label: "Health Check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Model",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-models-v-1-models-get",
          label: "Get Models",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Usage",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-usage-v-1-usage-get",
          label: "Get Usage",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
