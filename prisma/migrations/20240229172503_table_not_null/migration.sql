-- AlterTable
ALTER TABLE "Mensagem" ALTER COLUMN "tokenConfirma" DROP NOT NULL,
ALTER COLUMN "tokenCancela" DROP NOT NULL,
ALTER COLUMN "dataResposta" DROP NOT NULL,
ALTER COLUMN "resposta" DROP NOT NULL;
