import { GuildAdminDto, ShowGuildsLazyAdmin, ShowGuildsLazyAdminResponse, SpaadminService } from "apis";
import { useQuery } from "react-query";
import { cleanObject } from "./useDocumentTitle";
export interface useGuildParam {
  first?: number;
  rows?: number;
  data?: string;
}
/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-20 10:05:04
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 11:54:56
 */
export const useGuilds = (param: Partial<useGuildParam>) => {

  let { first, rows, data } = param;
  return useQuery<ShowGuildsLazyAdminResponse>(["guilds", cleanObject(param)], async () => {
    let val_ = await SpaadminService.showGuildsLazyAdminguildslazyshowGet('application/json', first ?? 0, rows ?? 10, 'CreatedDate', -1, data ?? undefined);
    return val_;
  }
  );
};