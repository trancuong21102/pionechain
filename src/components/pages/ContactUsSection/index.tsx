"use client";

// import { HeadTitle } from "@/components/HeadTitle";
import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreate } from "@/ultility/schema";
import { useMutation } from "@tanstack/react-query";
import { fetchContact } from "@/store/api";
import { addToast } from "@heroui/react";
import IconifyIcon from "@/components/Iconify";

interface FormContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactUSSection = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormContactData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schemaCreate),
  });

  const sendContact = useMutation({
    mutationFn: (data: FormContactData) => {
      return fetchContact(data);
    },
  });

  const onSubmit = (data: FormContactData) => {
    sendContact.mutate(
      {
        name: data?.name,
        email: data?.email,
        subject: data?.subject,
        message: data?.message,
      },
      {
        onSuccess: (res) => {
          if (res?.status) {
            reset();
            addToast({
              title: "Success",
              description: res?.message,
              variant: "bordered",
              color: "success",
            });
          }
        },
      }
    );
  };

  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>

      <div className="relative container py-40 flex items-center justify-center lg:justify-between lg:flex-row flex-col gap-10 lg:gap-32">
        {/* <HeadTitle
          title={t("contactUs.title")}
          subTitle={t("contactUs.subTitle")}
        /> */}
        <div className="flex flex-col gap-20 w-full lg:w-2/4 lg:items-start items-center">
          <div className="flex flex-col gap-5">
            <h1 className=" text-5xl sm:text-7xl font-semibold bg-gradient-to-r bg-clip-text from-[#E74041] via-[#FA5805] to-[#C09595] text-transparent leading-[100%] tracking-tighter">
              {t("contactUs.Contact Us")}
            </h1>
            <p className=" text-gray-300 text-lg lg:text-left text-center">
              {t("contactUs.feedback")}{" "}
            </p>
          </div>
          <p>
            PIONE LABS -{" "}
            <span className="text-orange-600 font-semibold">
              info@pionechain.com
            </span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 sm:p-10 rounded-xl gap-10 text-white w-full lg:w-2/4 border-3 border-[#272727] bg-[#141414]"
        >
          {/* Form */}
          <div className="flex w-full sm:flex-row flex-col items-center gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                {t("contactUs.Name")} <span className="text-red-500">*</span>
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("contactUs.enterName")}
                    variant="outlined"
                    error={Boolean(errors.name)}
                    helperText={errors?.name?.message}
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
                        borderColor: errors.name ? "#f87171" : "transparent",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={t("contactUs.enterEmail")}
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
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              {t("contactUs.Subject")}
            </label>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder={t("contactUs.enterSubject")}
                  variant="outlined"
                  error={Boolean(errors.subject)}
                  helperText={errors.subject?.message}
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
                      borderColor: errors.subject ? "#f87171" : "transparent",
                    },
                  }}
                />
              )}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              {t("contactUs.Message")}
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
                  placeholder={t("contactUs.enterMessage")}
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
                loading={sendContact.isPending}
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
                  opacity: sendContact.isPending ? 0.7 : 1,
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
