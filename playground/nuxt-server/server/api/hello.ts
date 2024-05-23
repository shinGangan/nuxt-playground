/**
 * @summary GET /api/hello
 * @description hello worldを返す
 * @return { status: 200, message: "OK", data: 'Hello World' }
 */
export default defineEventHandler(async (event) => {
  return "Hello World";
});
