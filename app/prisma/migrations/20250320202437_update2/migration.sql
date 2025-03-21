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
