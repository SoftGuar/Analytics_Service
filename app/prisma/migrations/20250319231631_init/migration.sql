-- CreateTable
CREATE TABLE "Navigation_logs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "environment_id" INTEGER NOT NULL,
    "rerouting_count" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Navigation_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone_logs" (
    "id" SERIAL NOT NULL,
    "navigation_id" INTEGER NOT NULL,
    "zone_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "obstacles_encountered" INTEGER NOT NULL,

    CONSTRAINT "Zone_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POI_logs" (
    "id" SERIAL NOT NULL,
    "navigation_id" INTEGER NOT NULL,
    "POI_id" INTEGER NOT NULL,
    "visit_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POI_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zone_logs" ADD CONSTRAINT "Zone_logs_navigation_id_fkey" FOREIGN KEY ("navigation_id") REFERENCES "Navigation_logs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POI_logs" ADD CONSTRAINT "POI_logs_navigation_id_fkey" FOREIGN KEY ("navigation_id") REFERENCES "Navigation_logs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
