const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require("next/constants");
  
  /** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
  module.exports = async (phase) => {
    /** @type {import("next").NextConfig} */
  
  // Your current or future configuration 
  
    const nextConfig = {
    };
  
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
      const withSerwist = (await import("@serwist/next")).default({
        swSrc: "public/service-worker/sw.ts",
        swDest: "public/sw.js",
        reloadOnOnline: true,
      });
      return withSerwist(nextConfig);
    }
  
    return nextConfig;
  };
  