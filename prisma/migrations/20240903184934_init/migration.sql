-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "creators" TEXT NOT NULL,
    "supervisor" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "innovation" TEXT NOT NULL,
    "commercialization" TEXT NOT NULL,
    "conclusion" TEXT NOT NULL,
    "futureWork" TEXT NOT NULL,
    "acknowledgment" TEXT NOT NULL,
    "references" TEXT NOT NULL,
    "sponsors" TEXT NOT NULL,
    "teams" TEXT NOT NULL,
    "contributors" TEXT NOT NULL,
    "projectDocument" TEXT NOT NULL,
    "methodologyImages" TEXT NOT NULL,
    "resultImages" TEXT NOT NULL,
    "resources" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);