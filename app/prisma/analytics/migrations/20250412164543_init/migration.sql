-- CreateTable
CREATE TABLE "Navigation_logs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "environment_id" INTEGER NOT NULL,
    "rerouting_count" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3),

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
    "poi_id" INTEGER NOT NULL,
    "visit_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POI_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceUsageLogs" (
    "id" SERIAL NOT NULL,
    "dispositive_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "battery_level" INTEGER NOT NULL,
    "connected" BOOLEAN NOT NULL,

    CONSTRAINT "DeviceUsageLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSessions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "session_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session_end" TIMESTAMP(3),
    "device_id" INTEGER,
    "ip_address" TEXT,

    CONSTRAINT "UserSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "level" VARCHAR(10) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "pid" INTEGER NOT NULL,
    "hostname" VARCHAR(255) NOT NULL,
    "msg" TEXT NOT NULL,
    "error" JSONB NOT NULL,
    "request" JSONB NOT NULL,
    "full_log" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zone_logs" ADD CONSTRAINT "Zone_logs_navigation_id_fkey" FOREIGN KEY ("navigation_id") REFERENCES "Navigation_logs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POI_logs" ADD CONSTRAINT "POI_logs_navigation_id_fkey" FOREIGN KEY ("navigation_id") REFERENCES "Navigation_logs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
