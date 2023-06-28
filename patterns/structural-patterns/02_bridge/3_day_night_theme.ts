interface Theme
{
  background(): string;
  foreground(): string;
  lineColor(): string;
  fontColor(): string;
  altFontColor(): string;
}

abstract class UIObject
{
  protected constructor(public theme: Theme) {}
  public abstract draw(): void;
}

// Theme 1: Light Mode:
class LightMode implements Theme
{
  background(): string { return "#ffffff"; }
  foreground(): string { return "#aaaaaa"; }
  lineColor(): string { return "#0c60cd"; }
  fontColor(): string { return "#222222"; }
  altFontColor(): string { return "#000000"; }
}

// Theme 2: Dark Mode:
class DarkMode implements Theme
{
  background(): string { return "#111111"; }
  foreground(): string { return "#2d2d2d"; }
  lineColor(): string { return "#0c60cd"; }
  fontColor(): string { return "#dfdfdf"; }
  altFontColor(): string { return "#efefef"; }
}


// UI Object 1: Button:
class UIButton extends UIObject
{
  constructor(theme: Theme)
  {
    super(theme);
  }

  draw()
  {
    console.log("Drawing a button on the screen.");
    console.log("\tText Color: " + this.theme.fontColor());
    console.log("\tButton Color: " + this.theme.background());
    console.log("\tHighlight Text Color: " + this.theme.altFontColor());
  }

}

// UI Object 2: a Graph:
class UIGraph extends UIObject
{
  constructor(theme: Theme)
  {
    super(theme);
  }

   draw()
  {
    console.log("Drawing a graph on the screen.");
    console.log("\tMain Text Color: " + this.theme.fontColor());
    console.log("\tLine Color: " + this.theme.lineColor());
    console.log("\tAxis Text Color: " + this.theme.altFontColor());
    console.log("\tGraph Background Color: " + this.theme.foreground());
  }
}


class BridgeSolution
{
  public static execute()
  {
    // Create the themes:
    const light = new LightMode();
    const dark = new DarkMode();

    // Create the UI Objects:
    const button = new UIButton(light);
    const graph = new UIGraph(dark);

    // Draw the objects:
    button.draw();
    graph.draw();
  }
}

// Run the demo code:
BridgeSolution.execute();

// Output:
/*
   Drawing a button on the screen.
       Text Color: #222222
       Button Color: #ffffff
       Highlight Text Color: #000000

   Drawing a graph on the screen.
       Main Text Color: #dfdfdf
       Line Color: #0c60cd
       Axis Text Color: #efefef
       Graph Background Color: #2d2d2d
*/


