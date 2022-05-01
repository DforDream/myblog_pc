import { defineStore } from 'pinia';
import request from "@/http";
import { FIND_SHOW_MSGBOARD, FIND_ALL_MSGBOARD } from '@/http/api';

export interface Msgboard {
  id: number
  msgboard: string,
  isshow: boolean
}
const current:number = 1
const total:number = 1
const allMsgboard:Msgboard[] = []

const useMsgboard = defineStore('msgboard',{
  state:() => ({
    current,
    total,
    allMsgboard
  }),
  actions: {
    getShowMsgboard(current:number = 1){
      request.get({
        url: FIND_SHOW_MSGBOARD,
        data: {
          current
        }
      }).then((res:any) => {
        if(res.data.code === 200){
          this.allMsgboard = res.data.data;
          this.total = res.data.total
        }
      })
    },
    getAllMsgboard(current:number = 1){
      request.get({
        url: FIND_ALL_MSGBOARD,
        data: {
          current
        }
      }).then((res:any) => {
        if(res.data.code === 200){
          this.allMsgboard = res.data.data;
          this.total = res.data.total
        }
      })
    }
  }
})

export default useMsgboard