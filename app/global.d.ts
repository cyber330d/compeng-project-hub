// global.d.ts

import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

// To ensure the file is treated as a module and not a script, which prevents global pollution
export {};
