import type { NextConfig } from "next";
import os from "os";

function getIps() {
  const interfaces = os.networkInterfaces();
  const ips = [];

  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]!) {
      if (net.family === "IPv4" && !net.internal) {
        ips.push(net.address);
      }
    }
  }

  return ips;
}


const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: getIps(),
};

export default nextConfig;
