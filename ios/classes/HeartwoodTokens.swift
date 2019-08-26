//
//  HeartwoodTokens.swift
//  HeartwoodTokens
//
//  Created by Ricky Padilla on 8/23/19.
//  Copyright © 2019 Spruce Labs, Inc. All rights reserved.
//

import CoreText

public class HeartwoodTokens: NSObject {
    
  public static var bundle: Bundle = {
    return Bundle(url: Bundle(for: HeartwoodTokens.self)
      .url(forResource: "HeartwoodTokens", withExtension: "bundle")!)!
  }()
  
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
    public typealias Size = StyleDictionarySize
  }
  
  public typealias Icon = StyleDictionaryIcon
  
  public typealias Color = HWColor
  public typealias ComponentStyle = StyleDictionary
  
  public struct DynamicColor {
    public let day: UIColor
    public let night: UIColor
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

// TODO: Script this instead of doing it manually
 public enum HWColor {
  public static let backgroundColorBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.backgroundColorBase,
     night: StyleDictionaryColorNight.backgroundColorBase
   )
  public static let backgroundColorDark = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.backgroundColorDark,
     night: StyleDictionaryColorNight.backgroundColorDark
   )
  public static let backgroundColorLight = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.backgroundColorLight,
     night: StyleDictionaryColorNight.backgroundColorLight
   )
  public static let borderColorBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.borderColorBase,
     night: StyleDictionaryColorNight.borderColorBase
   )
  public static let borderColorBold = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.borderColorBold,
     night: StyleDictionaryColorNight.borderColorBold
   )
  public static let colorCriticalBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorCriticalBase,
     night: StyleDictionaryColorNight.colorCriticalBase
   )
  public static let colorCriticalDark = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorCriticalDark,
     night: StyleDictionaryColorNight.colorCriticalDark
   )
  public static let colorCriticalDarker = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorCriticalDarker,
     night: StyleDictionaryColorNight.colorCriticalDarker
   )
  public static let colorCriticalLight = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorCriticalLight,
     night: StyleDictionaryColorNight.colorCriticalLight
   )
  public static let colorCriticalLighter = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorCriticalLighter,
     night: StyleDictionaryColorNight.colorCriticalLighter
   )
  public static let colorNeutral = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorNeutral,
     night: StyleDictionaryColorNight.colorNeutral
   )
  public static let colorPrimaryBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorPrimaryBase,
     night: StyleDictionaryColorNight.colorPrimaryBase
   )
  public static let colorPrimaryDark = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorPrimaryDark,
     night: StyleDictionaryColorNight.colorPrimaryDark
   )
  public static let colorPrimaryDarker = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorPrimaryDarker,
     night: StyleDictionaryColorNight.colorPrimaryDarker
   )
  public static let colorPrimaryLight = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorPrimaryLight,
     night: StyleDictionaryColorNight.colorPrimaryLight
   )
  public static let colorPrimaryLighter = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorPrimaryLighter,
     night: StyleDictionaryColorNight.colorPrimaryLighter
   )
  public static let colorSuccessBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorSuccessBase,
     night: StyleDictionaryColorNight.colorSuccessBase
   )
  public static let colorSuccessDark = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorSuccessDark,
     night: StyleDictionaryColorNight.colorSuccessDark
   )
  public static let colorSuccessDarker = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorSuccessDarker,
     night: StyleDictionaryColorNight.colorSuccessDarker
   )
  public static let colorSuccessLight = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorSuccessLight,
     night: StyleDictionaryColorNight.colorSuccessLight
   )
  public static let colorSuccessLighter = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorSuccessLighter,
     night: StyleDictionaryColorNight.colorSuccessLighter
   )
  public static let colorWarningBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorWarningBase,
     night: StyleDictionaryColorNight.colorWarningBase
   )
  public static let colorWarningDark = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorWarningDark,
     night: StyleDictionaryColorNight.colorWarningDark
   )
  public static let colorWarningDarker = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorWarningDarker,
     night: StyleDictionaryColorNight.colorWarningDarker
   )
  public static let colorWarningLight = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorWarningLight,
     night: StyleDictionaryColorNight.colorWarningLight
   )
  public static let colorWarningLighter = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.colorWarningLighter,
     night: StyleDictionaryColorNight.colorWarningLighter
   )
  public static let textColorBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorBase,
     night: StyleDictionaryColorNight.textColorBase
   )
  public static let textColorCodeBase = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeBase,
     night: StyleDictionaryColorNight.textColorCodeBase
   )
  public static let textColorCodeBlue = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeBlue,
     night: StyleDictionaryColorNight.textColorCodeBlue
   )
  public static let textColorCodeGreen = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeGreen,
     night: StyleDictionaryColorNight.textColorCodeGreen
   )
  public static let textColorCodeGrey = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeGrey,
     night: StyleDictionaryColorNight.textColorCodeGrey
   )
  public static let textColorCodeIndigo = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeIndigo,
     night: StyleDictionaryColorNight.textColorCodeIndigo
   )
  public static let textColorCodeOrange = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeOrange,
     night: StyleDictionaryColorNight.textColorCodeOrange
   )
  public static let textColorCodeRed = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeRed,
     night: StyleDictionaryColorNight.textColorCodeRed
   )
  public static let textColorCodeViolet = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeViolet,
     night: StyleDictionaryColorNight.textColorCodeViolet
   )
  public static let textColorCodeYellow = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorCodeYellow,
     night: StyleDictionaryColorNight.textColorCodeYellow
   )
  public static let textColorPlaceholder = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorPlaceholder,
     night: StyleDictionaryColorNight.textColorPlaceholder
   )
  public static let textColorSubdued = HeartwoodTokens.DynamicColor(
     day: StyleDictionaryColorDay.textColorSubdued,
     night: StyleDictionaryColorNight.textColorSubdued
   )
 }
