# General
* Feature parity with Aurora/Leviticus/etc
  * Home button
  * Edit mode
  * 404 page
  * Save draft
* Login
* Revision history
* Misc would-be-nice
  * External HTML as template for view
  * CSS file support for style
  * Determine file format
  * Clean up all the styles (use nesting, CSS format, etc) (only after switching to Violet on the public site)
  * Clean up and simplify WikiUtil
  * Image handling
  * CI/CD pipeline
  * Test coverage
* Docs
  * Define view interface
  * Describe strategy (state === file system, mutation === POST/PUT/DELETE, view is isomorphic)

# Migration strategy
* Write migration scripts to enforce file extensions
* Sunset support for extension-less files
* Check for article of same name when saving article with new extension