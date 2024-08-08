// src/WatsonChat.js
import React, { useEffect } from "react";

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "8582a640-01eb-4fc3-aa2a-d4d63a60cea1",
      region: "us-south",
      serviceInstanceID: "cbad6fa3-1f19-4516-9c2c-82c60a6beff4",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default WatsonChat;
