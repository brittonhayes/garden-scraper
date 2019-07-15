const puppeteer = require("puppeteer");

(async function captureScreen() {
  const components = [
    {
      url: "https://garden.zendesk.com/css-components/arrows/",
      name: "arrows"
    },
    {
      url: "https://garden.zendesk.com/css-components/avatars/",
      name: "avatars"
    },
    {
      url: "https://garden.zendesk.com/css-components/bedrock/",
      name: "bedrock"
    },
    {
      url: "https://garden.zendesk.com/css-components/breadcrumbs/",
      name: "breadcrumbs"
    },
    {
      url: "https://garden.zendesk.com/css-components/buttons/",
      name: "buttons"
    },
    {
      url: "https://garden.zendesk.com/css-components/callouts/",
      name: "callouts"
    },
    {
      url: "https://garden.zendesk.com/css-components/forms/checkbox/",
      name: "checkbox"
    },
    {
      url: "https://garden.zendesk.com/css-components/chrome/",
      name: "chrome"
    },
    {
      url: "https://garden.zendesk.com/css-components/forms/dropdown/",
      name: "dropdown"
    },
    {
      url: "https://garden.zendesk.com/css-components/grid/",
      name: "grid"
    },
    {
      url: "https://garden.zendesk.com/css-components/menus/",
      name: "menus"
    },
    {
      url: "https://garden.zendesk.com/css-components/pagination/",
      name: "pagination"
    },
    {
      url: "https://garden.zendesk.com/css-components/forms/range",
      name: "range"
    },
    {
      url: "https://garden.zendesk.com/css-components/scrollbars/",
      name: "scrollbars"
    },
    {
      url: "https://garden.zendesk.com/css-components/tabs/",
      name: "tabs"
    },
    {
      url: "https://garden.zendesk.com/css-components/tables/",
      name: "tables"
    },
    {
      url: "https://garden.zendesk.com/css-components/tags/",
      name: "tags"
    },
    {
      url: "https://garden.zendesk.com/css-components/forms/text/",
      name: "text"
    },
    {
      url: "https://garden.zendesk.com/css-components/tooltips/",
      name: "tooltips"
    },
    {
      url: "https://garden.zendesk.com/css-components/utilities/",
      name: "utilities"
    }
  ];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 2000, height: 2800 });

  // Loop through components --> Screenshot --> Save as component name
  for (let component of components) {
    try {
      await page.goto(component.url, {
        waitUntil: ["load", "networkidle2"],
        slowMo: 2000
      });
      await page.screenshot({
        fullPage: true,
        path: `./Screenshots/${component.name}.png`
      });
      console.log("\x1b[36m%s\x1b[0m", `Screenshot taken of ${component.name}`);
    } catch (e) {
      console.error(
        "\x1b[33m%s\x1b[0m",
        `Error in capturing site for Component: ${component.name}`,
        e
      );
    }
  }
  await browser.close();
  console.log("Operation Complete!");
})();
