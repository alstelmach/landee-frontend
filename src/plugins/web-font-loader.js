﻿const googleFontFamilies = ["Roboto:100,300,400,500,700,900&display=swap"];

export async function loadFonts() {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ "webfontloader"
  );

  webFontLoader.load({
    google: {
      families: googleFontFamilies,
    },
  });
}
