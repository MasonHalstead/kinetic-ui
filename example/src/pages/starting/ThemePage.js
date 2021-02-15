import React from 'react';
import cn from './Starting.module.scss';

const ThemePage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Theme</h2>
      </div>
      <div className={cn.block}>
        <p>
          kinetic-ui uses a provider context pattern to pass the theme throughout the library. There are a few ways to
          control the theme including at a per component level. The easiest way is to select a default theme or pass
          down the initial theme object into the ThemeProvider.
        </p>
        <p>Below are a few ways to setup a custom theme.</p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'kinetic-ui'
import 'kinetic-ui/dist/index.css'

// fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab)

const render = (Component) =>
  ReactDOM.render(
    <ThemeProvider default_theme='kinetic' theme={theme}>
      <Component />
    </ThemeProvider>,
    document.getElementById('root')
  )

render(App)`}</code>
      </pre>
      <div className={cn.header}>
        <h2>Basic Theme</h2>
      </div>
      <div className={cn.block}>
        <p>Below are a few ways to setup a custom theme.</p>
      </div>
      <pre className="code code-javascript">
        <label>JS</label>
        <code>{`const theme = {
  "colors": {
    "primary": "#273546",
    "secondary": "#91a7ff",
  },
  globals: {
    font_size: "13px",
    font_primary_color: "#212529",
  },
}
`}</code>
      </pre>
      <div className={cn.header}>
        <h2>Custom Theme Style</h2>
      </div>

      <pre className="code code-javascript">
        <label>JS</label>
        <code>{`const theme = {
  "colors": {
    "primary": "#273546",
    "secondary": "#91a7ff",
    "green": "#5cb85c",
    "orange": "#f0ad4e",
    "blue": "#3e96ed",
    "red": "#d9534f",
    "pink": "#e542af",
    "purple": "#9966cc",
    "yellow": "#fff4d3",
    "grey": "#818fa3",
    "transparent": "transparent"
  },
  globals: {
    primary_font: "'Roboto', sans-serif",
    secondary_font: "'Roboto', sans-serif",
    monospace_font: "",
    font_size: "13px",
    font_primary_color: "#212529",
    font_secondary_color: "#fff",
    switch_on: "#273546",
    switch_handle: "#fff",
    switch_off: "#dde2e6",
    switch_off_handle: "#fff",
    active_color: "#91a7ff",
    border_color: "#b2bbc3",
    placeholder_color: "#636c72",
  },
  "fonts": {
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529",
    "font_button_family": "'Roboto', sans-serif",
    "font_button_size": "13px",
    "font_button_transform": "none",
    "font_button_weight": 400,
    "font_input_family": "'Roboto', sans-serif",
    "font_input_size": "13px",
    "font_input_transform": "none",
    "font_input_weight": 400,
    "font_input_color": "#212529",
    "font_input_focus": "#91a7ff",
    "font_input_hover": "#273546",
    "font_input_placeholder": "#636c72",
    "font_tooltip_color": "#fff",
    "font_option_color": "#212529",
    "font_option_active": "#273546",
    "font_option_family": "'Roboto', sans-serif",
    "font_option_size": "13px",
    "font_option_hover": "#91a7ff",
    "font_light_color": "#fff",
    "font_dark_color": "#212529",
    "font_accordion_family": "'Roboto', sans-serif",
    "font_accordion_size": "13px",
    "font_accordion_color": "#212529",
    "font_accordion_hover": "#91a7ff",
    "font_accordion_transform": "none",
    "font_accordion_weight": 500,
    "font_table_family": "'Roboto', sans-serif",
    "font_table_size": "13px",
    "font_table_color": "#273546",
    "font_table_weight": 500,
    "font_table_transform": "none",
    "font_tab_color": "#fff"
  },
  backgrounds: {
    background_tooltip: "#2e3440",
    background_input_disabled: "#f5f5f5",
    background_option_hover: "rgba(0, 0, 0, 0.05)",
    background_option_selected: "rgba(0, 0, 0, 0.03)",
    background_option_active: "rgba(0, 0, 0, 0.05)",
    background_accordion: "#fff",
    background_header: "#f7f8f9",
    background_row_striped: "#f7f8f9",
    background_row_hover: "#e4edf9",
    background_modal: "#fff",
    background_tab: "rgba(25, 118, 210, 0.8)",
    background_progress: "#f8f9fe",
    background_progress_bar: "#273546",
  },
}
`}</code>
      </pre>
      <div className={cn.header}>
        <h2>Advanced Theme Style</h2>
      </div>

      <pre className="code code-javascript">
        <label>JS</label>
        <code>{`const theme = {
  "colors": {
    "primary": "#273546",
    "secondary": "#91a7ff",
    "green": "#5cb85c",
    "orange": "#f0ad4e",
    "blue": "#3e96ed",
    "red": "#d9534f",
    "pink": "#e542af",
    "purple": "#9966cc",
    "yellow": "#fff4d3",
    "grey": "#818fa3",
    "transparent": "transparent"
  },
  "fonts": {
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529",
    "font_button_family": "'Roboto', sans-serif",
    "font_button_size": "13px",
    "font_button_transform": "none",
    "font_button_weight": 400,
    "font_input_family": "'Roboto', sans-serif",
    "font_input_size": "13px",
    "font_input_transform": "none",
    "font_input_weight": 400,
    "font_input_color": "#212529",
    "font_input_focus": "#91a7ff",
    "font_input_hover": "#273546",
    "font_input_placeholder": "#636c72",
    "font_tooltip_color": "#fff",
    "font_option_color": "#212529",
    "font_option_active": "#273546",
    "font_option_family": "'Roboto', sans-serif",
    "font_option_size": "13px",
    "font_option_hover": "#91a7ff",
    "font_light_color": "#fff",
    "font_dark_color": "#212529",
    "font_accordion_family": "'Roboto', sans-serif",
    "font_accordion_size": "13px",
    "font_accordion_color": "#212529",
    "font_accordion_hover": "#91a7ff",
    "font_accordion_transform": "none",
    "font_accordion_weight": 500,
    "font_table_family": "'Roboto', sans-serif",
    "font_table_size": "13px",
    "font_table_color": "#273546",
    "font_table_weight": 500,
    "font_table_transform": "none",
    "font_tab_color": "#fff"
  },
  "labels": {
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529"
  },
  "buttons": {
    "font_button_family": "'Roboto', sans-serif",
    "font_button_size": "13px",
    "font_button_transform": "none",
    "font_button_weight": 400
  },
  "dropdowns": {
    "border_select": "1px solid #91a7ff",
    "font_option_color": "#212529",
    "font_option_active": "#273546",
    "font_option_family": "'Roboto', sans-serif",
    "font_option_size": "13px",
    "font_option_hover": "#91a7ff",
    "background_option_hover": "rgba(0, 0, 0, 0.05)",
    "background_option_selected": "rgba(0, 0, 0, 0.03)",
    "background_option_active": "rgba(0, 0, 0, 0.05)",
    "font_input_family": "'Roboto', sans-serif",
    "font_input_size": "13px",
    "font_input_transform": "none",
    "font_input_weight": 400,
    "font_input_color": "#212529",
    "font_input_placeholder": "#636c72",
    "font_input_focus": "#91a7ff",
    "font_input_hover": "#273546",
    "border_input": "1px solid #b2bbc3",
    "border_input_focus": "1px solid #91a7ff",
    "border_input_disabled": "1px solid #b2bbc3",
    "background_input_disabled": "#f5f5f5",
    "background_tooltip": "#2e3440",
    "font_tooltip_color": "#fff",
    "border_tooltip": "1px solid #383838",
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529"
  },
  "inputs": {
    "font_input_family": "'Roboto', sans-serif",
    "font_input_size": "13px",
    "font_input_transform": "none",
    "font_input_weight": 400,
    "font_input_color": "#212529",
    "font_input_placeholder": "#636c72",
    "font_input_focus": "#91a7ff",
    "font_input_hover": "#273546",
    "border_input": "1px solid #b2bbc3",
    "border_input_focus": "1px solid #91a7ff",
    "border_input_disabled": "1px solid #b2bbc3",
    "background_input_disabled": "#f5f5f5",
    "background_tooltip": "#2e3440",
    "font_tooltip_color": "#fff",
    "border_tooltip": "1px solid #383838",
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529"
  },
  "tooltips": {
    "background_tooltip": "#2e3440",
    "font_tooltip_color": "#fff",
    "border_tooltip": "1px solid #383838"
  },
  "switches": {
    "switch_on": "#273546",
    "switch_handle": "#fff",
    "switch_off": "#dde2e6",
    "switch_off_handle": "#fff",
    "font_light_color": "#fff",
    "font_dark_color": "#212529",
    "font_label_family": "'Roboto', sans-serif",
    "font_label_size": "13px",
    "font_label_transform": "none",
    "font_label_weight": 500,
    "font_label_color": "#212529"
  },
  "accordions": {
    "font_accordion_family": "'Roboto', sans-serif",
    "font_accordion_size": "13px",
    "font_accordion_color": "#212529",
    "font_accordion_hover": "#91a7ff",
    "font_accordion_transform": "none",
    "font_accordion_weight": 500,
    "border_accordion": "1px solid #b2bbc3",
    "background_accordion": "#fff"
  },
  "tables": {
    "border_table_color": "#b2bbc3",
    "background_header": "#f7f8f9",
    "font_table_family": "'Roboto', sans-serif",
    "font_table_size": "13px",
    "font_table_color": "#273546",
    "font_table_weight": 500,
    "font_table_transform": "none",
    "background_row_striped": "#f7f8f9",
    "background_row_hover": "#e4edf9",
    "font_button_family": "'Roboto', sans-serif",
    "font_button_size": "13px",
    "font_button_transform": "none",
    "font_button_weight": 400
  },
  "tabs": {
    "tab_height": "48px",
    "background_tab": "rgba(25, 118, 210, 0.8)",
    "border_tab": "#4a84d1",
    "font_tab_color": "#fff"
  },
  "modal": {
    "background_modal": "#fff",
    "border_modal": "1px solid #b2bbc3",
    "modal_close_color": "#273546"
  },
  "wizard": {
    "font_button_family": "'Roboto', sans-serif",
    "font_button_size": "13px",
    "font_button_transform": "none",
    "font_button_weight": 400,
    "background_progress": "#f8f9fe",
    "background_progress_bar": "#273546"
  },
  "progress": {
    "background_progress": "#f8f9fe",
    "background_progress_bar": "#273546"
  }
}
`}</code>
      </pre>
    </div>
  );
};
export default ThemePage;
