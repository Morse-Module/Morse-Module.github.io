import 'package:flutter/material.dart';

class Themes {
  final _fontFamily = 'Source Code Pro';

  ThemeData get dark => ThemeData(
        fontFamily: _fontFamily,
        brightness: Brightness.dark,
        backgroundColor: Colors.white,
        primaryColor: Colors.black,
        canvasColor: Colors.black,
        primaryColorBrightness: Brightness.dark,
      );
  ThemeData get light => ThemeData(
        fontFamily: _fontFamily,
        brightness: Brightness.light,
        backgroundColor: Colors.white,
        primaryColor: Colors.black,
        primaryColorBrightness: Brightness.dark,
      );
}
