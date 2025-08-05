const Config: BehaviorConfig = {
  addonType: "behavior",
  // type: "object",
  id: "ExampleAddon",
  name: "Example Addon",
  version: "1.0.0.0",
  category: "general",
  author: "Author",
  description: "Description",
  icon: "icon.svg",
  editorScripts: ['editor.js'],
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  addonUrl: 'https://www.construct.net/addons/',
  githubUrl: "https://github.com/",
  info: {
    // defaultImageUrl: undefined,
    Set: {
      CanBeBundled: true,
      IsDeprecated: false,
      // IsOnlyOneAllowed: false,
      // IsResizable: true,
      // IsRotatable: true,
      // Is3D: false,
      // HasImage: true,
      // IsTiled: false,
      // SupportsZElevation: true,
      // SupportsColor: true,
      // SupportsEffects: true,
      // MustPreDraw: false,
      // IsSingleGlobal: false,
      // GooglePlayServicesEnabled: false,
    },
    // AddCommonACEs: {
    //   Position: true,
    //   SceneGraph: true,
    //   Size: true,
    //   Angle: true,
    //   Appearance: true,
    //   ZOrder: true,
    // }
  },
  fileDependencies: {},
  properties: [
    /*{
      type: "integer",
      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Property Name",
      desc: "Property Description",
    }*/
  ],
  aceCategories: {
    general: "General",
  },
};

export default Config as BuiltAddonConfig;
