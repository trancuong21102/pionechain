"use client";

// import { HeadTitle } from "@/components/HeadTitle";
import IconifyIcon from "@/components/Iconify";
import { fetchContactPartner, fetchListFields } from "@/store/api";
import { ContactFormData } from "@/store/types";
import { schemaContactPartner } from "@/ultility/schema";
import { addToast } from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ContactPartnerSection = () => {
  const { t } = useTranslation();
  const [loading, setIsLoading] = useState(false);
  const { data: dataField } = useQuery({
    queryKey: ["list_field_partner"],
    queryFn: () => fetchListFields(),
  });

  console.log(dataField, "dataField");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      title: "",
      email: "",
      phone_number: "",
      organization_name: "",
      organization_location: "",
      industry: "",
      organization_size: "",
      field_id: [],
      message: "",
    },
    resolver: yupResolver(schemaContactPartner),
  });
  console.log(errors, "test contact");

  const sendContact = useMutation({
    mutationFn: (data: ContactFormData) => {
      return fetchContactPartner(data);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const dataWithToken = {
      ...data,
    };
    setIsLoading(true);
    sendContact.mutate(dataWithToken, {
      onSuccess: (res) => {
        if (res?.status) {
          setIsLoading(false);
          reset();
          addToast({
            title: "Success",
            description: res?.message,
            variant: "bordered",
            color: "success",
          });
        }
      },
      onError: (error) => {
        setIsLoading(false);
        addToast({
          title: "Error",
          description: error.message || "Something went wrong",
          variant: "bordered",
          color: "danger",
        });
      },
    });
  };

  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>

      <div className="relative container py-40 flex items-center justify-center lg:flex-row flex-col  gap-10 lg:gap-32">
        {/* <HeadTitle
          title={t("contactUs.title")}
          subTitle={t("contactUs.subTitle")}
        /> */}
        <div className="flex flex-col gap-10 w-full lg:w-2/4 ">
          <div className="flex flex-col gap-5">
            <h1 className=" text-5xl sm:text-7xl font-semibold bg-gradient-to-r bg-clip-text from-[#E74041] via-[#FA5805] to-[#C09595] text-transparent leading-[100%] tracking-tighter">
              {t("partner.Contact Partner")}
            </h1>
            <p className=" text-gray-300 text-lg text-left">
              {t("partner.form.contact")}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">{t("partner.form.info")}</p>
            <div className="flex items-center gap-2">
              <p className="text-orange-700 font-semibold">Phone:</p>
              <p>+(84) 901419949</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-orange-700 font-semibold">Email:</p>
              <p>nhien@pionegroup.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 sm:p-10 rounded-xl gap-10 text-white w-full lg:w-3/4 border-3 border-[#272727] bg-[#141414]"
        >
          <div className="flex w-full sm:flex-row flex-col items-center gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("contactUs.Name")} <span className="text-red-500">*</span>
              </label>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("partner.form.First Name")}
                    variant="outlined"
                    error={Boolean(errors.first_name)}
                    helperText={errors?.first_name?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.first_name
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Last Name")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("contactUs.enterName")}
                    variant="outlined"
                    error={Boolean(errors.last_name)}
                    helperText={errors?.last_name?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.last_name
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              {t("partner.form.Title")}
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder={t("partner.form.Title")}
                  variant="outlined"
                  error={Boolean(errors.title)}
                  helperText={errors.title?.message}
                  sx={{
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#262626",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                    },
                    "& .MuiFormHelperText-root": {
                      color: "#f87171",
                      backgroundColor: "transparent",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.title ? "#f87171" : "transparent",
                    },
                  }}
                />
              )}
            />
          </div>
          <div className="flex w-full sm:flex-row flex-col items-center gap-4">
            <div className=" w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Email")}
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("partner.form.Email")}
                    variant="outlined"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.email ? "#f87171" : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className=" w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Phone Number")}
              </label>
              <Controller
                name="phone_number"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("partner.form.Phone Number")}
                    variant="outlined"
                    error={Boolean(errors.phone_number)}
                    helperText={errors.phone_number?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.phone_number
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex w-full sm:flex-row flex-col items-center gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Organization Name")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="organization_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("partner.form.Organization Name")}
                    variant="outlined"
                    error={Boolean(errors.organization_name)}
                    helperText={errors.organization_name?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#fff" },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.organization_name
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Industry")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("partner.form.Industry")}
                    variant="outlined"
                    error={Boolean(errors.industry)}
                    helperText={errors.industry?.message}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#fff" },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.industry
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full max-w-full">
            <label className="block mb-1 text-sm font-medium">
              {t("partner.form.Categories")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="field_id"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  placeholder={t("partner.form.Categories")}
                  variant="outlined"
                  error={Boolean(errors.industry)}
                  helperText={errors.industry?.message}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected: any) => {
                      if (selected.length === 0)
                        return t("partner.form.Categories");
                      const selectedNames = dataField?.data
                        ?.filter((item: any) => selected.includes(item.id))
                        ?.map((item: any) => item.name)
                        ?.join(", ");
                      return selectedNames?.length > 50
                        ? selectedNames.slice(0, 50) + "..."
                        : selectedNames;
                    },
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          backgroundColor: "#262626",
                          color: "#fff",
                          maxHeight: 250, // Giới hạn chiều cao dropdown
                        },
                      },
                    },
                  }}
                  sx={{
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#262626",
                      borderRadius: "8px",
                      maxWidth: "100%", // ✅ Không cho vượt layout
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                    "& .MuiSvgIcon-root": { color: "#fff" },
                    "& .MuiFormHelperText-root": {
                      color: "#f87171",
                      backgroundColor: "transparent",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.industry ? "#f87171" : "transparent",
                    },
                  }}
                  value={field.value || []}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  {dataField?.data?.length > 0 ? (
                    dataField.data.map((item: any) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No data</MenuItem>
                  )}
                </TextField>
              )}
            />
          </div>
          <div className="flex w-full sm:flex-row flex-col items-center gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("partner.form.Organization Size")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="organization_size"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select // <-- Đánh dấu đây là Select
                    fullWidth
                    variant="outlined"
                    error={Boolean(errors.organization_size)}
                    helperText={errors.organization_size?.message}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            backgroundColor: "#262626",
                            color: "#fff",
                          },
                        },
                      },
                    }}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#262626",
                        borderRadius: "8px",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#9ca3af",
                      },
                      "& .MuiInputBase-input": { color: "#fff" },
                      "& .MuiSvgIcon-root": { color: "#fff" },
                      "& .MuiFormHelperText-root": {
                        color: "#f87171",
                        backgroundColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.organization_size
                          ? "#f87171"
                          : "transparent",
                      },
                    }}
                  >
                    <MenuItem value="1-10">
                      {t("partner.form.1-10 employees")}
                    </MenuItem>
                    <MenuItem value="11-50">
                      {t("partner.form.11-50 employees")}
                    </MenuItem>
                    <MenuItem value="51-200">
                      {t("partner.form.51-200 employees")}
                    </MenuItem>
                    <MenuItem value="200+">
                      {t("partner.form.over 200 employees")}
                    </MenuItem>
                  </TextField>
                )}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              {t("partner.form.Organization Location")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="organization_location"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder={t("partner.form.Organization Location")}
                  variant="outlined"
                  error={Boolean(errors.organization_location)}
                  helperText={errors.organization_location?.message}
                  sx={{
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#262626",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    "& .MuiFormHelperText-root": {
                      color: "#f87171",
                      backgroundColor: "transparent",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.organization_location
                        ? "#f87171"
                        : "transparent",
                    },
                  }}
                />
              )}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              {t("partner.form.Message")}
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  rows={10}
                  placeholder={t("partner.form.Message")}
                  variant="outlined"
                  error={Boolean(errors.message)}
                  helperText={errors.message?.message}
                  sx={{
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#262626",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-inputMultiline": {
                      color: "#fff",
                    },
                    "& .MuiFormHelperText-root": {
                      color: "#f87171",
                      backgroundColor: "transparent",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.message ? "#f87171" : "transparent",
                    },
                  }}
                />
              )}
            />

            <div className="flex justify-end mt-10">
              <Button
                loading={loading}
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ea580c",
                  borderRadius: "10px",
                  padding: "5px 40px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  opacity: loading ? 0.7 : 1,
                  "&:hover": { backgroundColor: "#ea580c" },
                  "&.Mui-disabled": {
                    backgroundColor: "#ea580c",
                    color: "white",
                    opacity: 0.7,
                  },
                }}
              >
                <span>{t("contactUs.submit")}</span>
                <IconifyIcon icon="lineicons:telegram" fontSize={25} />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
