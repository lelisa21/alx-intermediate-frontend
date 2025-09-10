# SASS/SCSS Project Setup and Tasks

## Project Overview
This project demonstrates the practical implementation of SASS/SCSS features to solve real-world CSS challenges in large-scale web applications. The tasks focus on core SASS concepts including variables, nesting, mixins, and debugging.

## Installation Steps (0-installation-script)
1. Created a new directory `0x03-sass_scss` in the alx-intermediate-frontend repository
2. Installed Node.js (if not already installed)
3. Installed SASS using npm: `npm install sass -v 3.7.4`
4. Verified installation with: `sass --version`

## Task Solutions

### 1. Debug Message (0-debug_log.scss)
```scss
@debug "Hello world";
```

### 2. Color Variables (1-color_variable.scss)
```scss
$text-color: #3D3D3D;

body {
  color: $text-color;
}

p {
  color: $text-color;
}
```

### 3. Nesting (2-nested_tag.scss)
```scss
body {
  margin: 0px;
  padding: 0px;
  
  p {
    margin: 10px;
  }
}
```

### 4. Margin Mixins (3-mixin_margins.scss)
```scss
@mixin margin-left-right($margin) {
  margin-left: $margin;
  margin-right: $margin;
}

body {
  @include margin-left-right(10px);
}

div {
  @include margin-left-right(15px);
}
```

## Real-World Application
These SASS/SCSS techniques directly address the challenges mentioned in large-scale applications like Netflix, Airbnb, or Shopify:

1. **Design System Enforcement**: Using variables ensures visual consistency across components
2. **Codebase Structure**: Nesting helps organize related styles logically
3. **Development Speed**: Mixins eliminate repetitive code for common patterns
4. **Maintainability**: Centralized variables make global changes simple and error-free

## Project Structure
```
0x03-sass_scss/
├── 0-installation-script
├── 0-debug_log.scss
├── 1-color_variable.scss
├── 2-nested_tag.scss
└── 3-mixin_margins.scss
```

