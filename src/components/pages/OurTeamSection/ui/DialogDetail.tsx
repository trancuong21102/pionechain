/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={{ enter: 500, exit: 300 }}
    />
  );
});

export default function DialogDetail({
  open,
  setOpen,
  member,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  member: any;
}) {
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const translation = member?.translation?.[0] || {};
  const links = [
    { href: member?.website, label: "Website" },
    { href: member?.linked, label: "LinkedIn" },
    { href: member?.tele, label: "Telegram" },
    { href: member?.facebook, label: "Facebook" },
    { href: member?.twitter, label: "Twitter" },
  ].filter((l) => l.href);

  return (
    <React.Fragment>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            background: "#1919195b",
            backdropFilter: "blur(12px)",
          },
        }}
        fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        {/* Nút đóng */}
        <DialogTitle
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Nội dung chính */}
        <DialogContent className="relative pt-10 scroll-bar">
          <div className="flex flex-col gap-6 md:flex-row">
            <Image
              src={member?.image || "/images/default-avatar.png"}
              alt={member?.name || ""}
              width={150}
              height={150}
              className="object-cover w-40 h-40 border-2 rounded-full border-rose-900"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">
                {member?.name}
              </h2>
              <p className="text-lg text-gray-400">
                {translation.position || member?.role || ""}
              </p>

              {/* 🔗 Liên kết */}
              {links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-orange-500 underline hover:text-orange-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* 📝 Mô tả */}
              {translation.description && (
                <div className="mt-4 leading-relaxed text-gray-300 whitespace-pre-line">
                  {translation.description}
                </div>
              )}

              {/* 🧠 Kinh nghiệm */}
              {translation.experience && (
                <p className="mt-4 text-sm italic text-gray-400">
                  <strong>Experience:</strong> {translation.experience}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
