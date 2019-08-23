//
//  HeartwoodTokens.swift
//  SwiftUI Heartwood Components
//
//  Created by Ricky Padilla on 8/23/19.
//  Copyright © 2019 Spruce Labs, Inc. All rights reserved.
//

import CoreText

public class HeartwoodTokens: NSObject {
  
  public static let bundle = Bundle(url: Bundle(for: HeartwoodTokens.self)
    .url(forResource: "HeartwoodTokens", withExtension: "bundle")!)!
  
  public enum Font: CaseIterable {
    case mono
    case regular
    case semibold
    public var name: String {
      switch self {
      case .mono: return "SourceCodePro-Medium"
      case .regular: return "SourceSansPro-Regular"
      case .semibold: return "SourceSansPro-SemiBold"
      }
    }
    public var font: UIFont {
      return UIFont(name: self.name, size: 14) ?? UIFont.init()
    }
  }
  
  public static var loadAllFonts: () -> Void = {
    let fontNames = Font.allCases.map { $0.name }
    for fontName in fontNames {
      loadFont(withName: fontName)
    }
    return {}
  }()
  
  private static func loadFont(withName fontName: String) {
    guard
      let fontURL = bundle.url(forResource: fontName, withExtension: "ttf"),
      let fontData = try? Data(contentsOf: fontURL) as CFData,
      let provider = CGDataProvider(data: fontData),
      let font = CGFont(provider) else {
        return
    }
    CTFontManagerRegisterGraphicsFont(font, nil)
  }
  
}
