-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "content" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
