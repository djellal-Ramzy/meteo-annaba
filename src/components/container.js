import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import { ThemeContext } from ".././contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/Cloud";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import "moment/locale/ar";

export default function SimpleContainer({ weather }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deriction, setDirection] = useState("rtl");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t, i18n } = useTranslation();
  function handelTranslate(langue) {
    i18n.changeLanguage(langue);
    moment.locale(langue);
    handelchangeLangue();
    setdateTime(moment().format("dddd DD-MM-YYYY"));
    setDirection(deriction == "ltr" ? "rtl" : "ltr");
  }
  const handelchangeLangue = useContext(ThemeContext);
  const [dateTime, setdateTime] = useState("");
  const theme = useTheme();
  useEffect(() => {
    setdateTime(moment().format("dddd DD-MM-YYYY"));
  }, []);
  return (
    <Box
      dir={deriction}
      sx={{
        bgcolor:
          theme.palette.mode == "light"
            ? theme.palette.color.primary.light
            : theme.palette.color.primary.dark,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        dir={deriction}
        sx={{
          width: 500,
          height: 300,
          px: 2,
          py: 3,
          borderRadius: 2,
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          bgcolor: theme.palette.color.primary.main,
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}>
        <Stack
          dir={deriction}
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "start",
            borderBottom: "2px solid #fff",
          }}>
          <Typography
            variant="h3"
            sx={{ color: theme.typography.text.primary }}>
            {t(weather.villeName)}
          </Typography>
          <Typography
            sx={{
              color: theme.typography.text.secondary,
              fontSize: "22px",
              fontWeight: "bold",
            }}>
            {dateTime}
          </Typography>

          <TranslateIcon
            sx={{ color: theme.typography.text.primary }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            dir={deriction}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            <MenuItem
              onClick={() => {
                handelTranslate(theme.palette.langue);
                handleClose();
              }}>
              {theme.palette.langue}
            </MenuItem>
          </Menu>
        </Stack>
        <Stack
          dir={deriction}
          spacing={4}
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              justifyContent: "center",
              alignItems: "space-between",
            }}>
            <Stack
              direction="row"
              dir={deriction}
              sx={{
                justifyContent: "space-around",
                alignItems: "center",
                position: "relative",
              }}>
              <Typography
                className="temp"
                variant="h2"
                sx={{ color: theme.typography.text.primary }}>
                {weather.temp}
              </Typography>
              <img src={weather.icon} alt="" />
            </Stack>

            <Typography
              variant="h4"
              sx={{
                color: theme.typography.text.secondary,
                textAlign: "center",
              }}>
              {t(weather.description)}
            </Typography>

            <Stack
              dir={deriction}
              sx={{ color: theme.typography.text.secondary }}
              direction="row"
              spacing={1}>
              <div>
                <Typography variant="body6">
                  {t("temp min")} : {weather.temp_min}
                </Typography>
              </div>
              <div className="Deger">
                <Typography variant="body6">
                  {t("temp max")} : {weather.temp_max}
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Stack>
            <img style={{ width: "170px" }} src={weather.icon} alt="" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
