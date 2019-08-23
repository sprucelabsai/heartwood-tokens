import CoreText

public class HeartwoodFonts: NSObject {
  
  public enum Style: CaseIterable {
    case mono
    case regular
    case semibold
    public var value: String {
      switch self {
      case .mono: return "SourceCodePro-Medium"
      case .regular: return "SourceSansPro-Regular"
      case .semibold: return "SourceSansPro-SemiBold"
      }
    }
    public var font: UIFont {
      return UIFont(name: self.value, size: 14) ?? UIFont.init()
    }
  }
  
  public static var loadAll: () -> Void = {
    let fontNames = Style.allCases.map { $0.value }
    for fontName in fontNames {
      loadFont(withName: fontName)
    }
    return {}
  }()
  
  private static func loadFont(withName fontName: String) {
    guard
      let bundleURL = Bundle(for: self).url(forResource: "HeartwoodTokens", withExtension: "bundle"),
      let bundle = Bundle(url: bundleURL),
      let fontURL = bundle.url(forResource: fontName, withExtension: "ttf"),
      let fontData = try? Data(contentsOf: fontURL) as CFData,
      let provider = CGDataProvider(data: fontData),
      let font = CGFont(provider) else {
        return
    }
    CTFontManagerRegisterGraphicsFont(font, nil)
  }
  
}
