import { defineStore } from 'pinia';
import request from "@/http";
import { GET_ALL_CLASSIFY } from "@/http/api";

interface Classify {
  id: number,
  classify: string
}
const allClassify:Classify[] = []
const useClassify = defineStore('classify',{
  state: () =>({
    allClassify
  }),
  actions: {
    getAllClassify(){
      request.get({
        url: GET_ALL_CLASSIFY
      }).then((res:any) => {
        if(res.data.code === 200){
          this.allClassify = res.data.data;
        }
      })
    }
  }
})

export default useClassify;