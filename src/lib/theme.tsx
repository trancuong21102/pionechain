import { createTheme } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const innerTheme = createTheme({
  palette: {
    primary: {
      main: "#E74041",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 451,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#E74041",
    },
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 451,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FF7B00",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FDEFE9",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
