-- AddForeignKey
ALTER TABLE "DispoIssue" ADD CONSTRAINT "DispoIssue_dispositiveId_fkey" FOREIGN KEY ("dispositiveId") REFERENCES "Dispositive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
