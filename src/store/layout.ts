import { defineStore } from 'pinia';

const useLayout = defineStore('layout',{
  state: () => ({
    showAboutMe: false,
    showAdmin: false,
  }),
})

export default useLayout;