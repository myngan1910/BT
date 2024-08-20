-- CreateTable
CREATE TABLE "home" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title" TEXT,
    "description" TEXT,

    CONSTRAINT "home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "mail" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "price" TEXT,

    CONSTRAINT "shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reason" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "icon" TEXT,
    "description" TEXT,

    CONSTRAINT "reason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonial" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "title" TEXT,
    "description" TEXT,

    CONSTRAINT "testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "icon" TEXT,
    "link" TEXT,

    CONSTRAINT "social_pkey" PRIMARY KEY ("id")
);
