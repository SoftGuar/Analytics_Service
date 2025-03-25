-- CreateTable
CREATE TABLE "DispoIssue" (
    "id" SERIAL NOT NULL,
    "dispositiveId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "maintainerId" INTEGER NOT NULL,

    CONSTRAINT "DispoIssue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intervention" (
    "idMaintainer" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Intervention_pkey" PRIMARY KEY ("idMaintainer","idUser")
);

-- AddForeignKey
ALTER TABLE "DispoIssue" ADD CONSTRAINT "DispoIssue_maintainerId_fkey" FOREIGN KEY ("maintainerId") REFERENCES "Maintainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intervention" ADD CONSTRAINT "Intervention_idMaintainer_fkey" FOREIGN KEY ("idMaintainer") REFERENCES "Maintainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intervention" ADD CONSTRAINT "Intervention_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
