import axios from "axios";
import { ContactFormData, dataContact, GetBlogParams, ListPartnerData } from "../types";

// export const BASE_URL_API = "https://decreased-exhibition-tcp-seeks.trycloudflare.com//";
export const BASE_URL_API = "https://apiwebsz.pionewallet.com/";
export const BASE_URL_IMAGE =
  "https://apiwebsz.pionewallet.com/api/v1/common/image/";

// export const BASE_URL_IMAGEBLOG =
//   "https://decreased-exhibition-tcp-seeks.trycloudflare.com/api/v1/common/image";

export const API = axios.create({
  baseURL: BASE_URL_API,
});

API.interceptors.request.use(
  async (config) => {
    config.headers["ngrok-skip-browser-warning"] = "true";
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchContactPartner = async (body: ContactFormData) => {
  const { data } = await API.post("api/v1/common/contact/partner", body);
  return data;
};

export const fetchContact = async (body: dataContact) => {
  const { data } = await API.post("api/v1/common/contact/send", body);
  return data;
};

export const fetchListPartner = async (params: ListPartnerData) => {
  const { data } = await API.get(`api/v1/common/partner`, { params });
  return data;
};

export const fetchListFields = async () => {
  const { data } = await API.get(`api/v1/common/partner/field`);
  return data;
};

export const fetchCoreTeam = async (lang: string) => {
  const { data } = await API.get(`api/v1/common/core-team/members`, {
    params: { lang },
  });
  return data;
};

export const getBlogList = async (params: GetBlogParams) => {
  const { data } = await API.get(`api/v1/common/news/slug`, {
    params
  });
  return data;
};

export const getBlogTags = async () => {
  const { data } = await API.get(`api/v1/common/news/tag`);
  return data;
};

export const getBlogCategories = async () => {
  const { data } = await API.get(`api/v1/common/news/category`);
  return data;
};



fetchCoreTeam.queryKey = ["core_team_members"];

fetchListPartner.queryKey = ["list_partner"];
fetchContact.queryKey = ["send_contact"];
fetchContactPartner.queryKey = ["contact_partner"];
fetchListFields.queryKey = ["list_fields"];
getBlogList.queryKey = ["get_blog_list"];
getBlogTags.queryKey = ["get_blog_tags"];
getBlogCategories.queryKey = ["get_blog_categories"];
