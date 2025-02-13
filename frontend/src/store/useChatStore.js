import {create} from "zustand"
import toast from "react-hot-toast"
import {axiosInstance} from "../lib/axios"    

export const useChatStore = create((set,get) => ({
    messages:[],
    users:[],
    selectedUser:null,
    isUsersLoading:false,
    isMessagesLoading:false,


    getUsers: async () => {
        set({isUserLoading:true})
        try {
            const res = await axiosInstance.get("/messages/users")
            set({users:res.data})
        } catch (error) {
            toast.error("Failed to fetch users",error)
        }
        set({isUserLoading:false})
    },

    getMessages: async (userId) => {
        set({isMessagesLoading:true})
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error("Failed to fetch messages",error)
        }
        set({isMessagesLoading:false})
    },
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
          const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
          set({ messages: [...messages, res.data] });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    //todo:optimize later
    setSelectedUser: (selectedUser) => {
        set({selectedUser})
    },

}))