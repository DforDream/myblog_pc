import { defineStore } from 'pinia';

const useLayout = defineStore('layout',{
  state: () => ({
    showAboutMe: false
  }),
})

export default useLayout;