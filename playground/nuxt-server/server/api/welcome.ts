import { object, string } from "zod";

/**
 * @summary GET /api/welcome
 * @description Welcome ${param.name} を返す
 * @return { status: 200, message: "OK", data: 'Welcome ${param.name}' }
 */
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    object({ name: string() }).safeParse
  );
  // バリデーションエラーの場合は400エラーを返す
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "body is invalid",
    });
  }

  return `Welcome ${body.data.name}`;
});
