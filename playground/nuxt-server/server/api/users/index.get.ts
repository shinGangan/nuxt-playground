import { dummyUsers } from "~/types/user";

/**
 * @summary GET /api/users
 * @description ユーザー情報一覧を取得する
 * @param page - ページ番号. query parameter
 * @return { status: 200, message: "OK", data: users information }
 */
export default defineEventHandler(async (event) => {
  // NOTE: ダミーデータを返す
  return dummyUsers;
});
