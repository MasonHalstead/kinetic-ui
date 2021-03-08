import { lighten } from 'polished'

export const createTheme = (override) => {
  const {
    globals,
    fonts,
    backgrounds,
    borders,
    colors,
    labels,
    buttons,
    inputs,
    tooltips,
    dropdowns,
    accordions,
    switches,
    tables,
    tabs,
    modal,
    wizard,
    progress,
    calendar,
    snackbar
  } = override

  const default_colors = {
    primary: '#0a91ed',
    secondary: '#2e3440',
    green: '#5cb85c',
    orange: '#f0ad4e',
    blue: '#3e96ed',
    red: '#d9534f',
    pink: '#e542af',
    purple: '#9966cc',
    yellow: '#fff4d3',
    grey: '#818fa3',
    transparent: 'transparent',
    ...colors
  }

  const default_globals = {
    primary_font: `'Roboto', sans-serif`,
    secondary_font: `'Roboto', sans-serif`,
    monospace_font: '',
    font_size: '13px',
    font_primary_color: '#212529',
    font_secondary_color: '#fff',
    switch_on: default_colors.primary,
    switch_handle: '#fff',
    switch_off: '#dde2e6',
    switch_off_handle: '#fff',
    active_color: lighten(0.1, default_colors.primary),
    border_color: '#b2bbc3',
    placeholder_color: '#636c72',
    ...globals
  }

  const default_fonts = {
    // font label settings
    font_label_family: default_globals.primary_font,
    font_label_size: default_globals.font_size,
    font_label_transform: 'none',
    font_label_weight: 500,
    font_label_color: default_globals.font_primary_color,
    // font button settings
    font_button_family: default_globals.secondary_font,
    font_button_size: default_globals.font_size,
    font_button_transform: 'none',
    font_button_weight: 400,
    // font input settings
    font_input_family: default_globals.primary_font,
    font_input_size: default_globals.font_size,
    font_input_transform: 'none',
    font_input_weight: 400,
    font_input_color: default_globals.font_primary_color,
    font_input_focus: default_globals.active_color,
    font_input_hover: default_colors.primary,
    font_input_placeholder: default_globals.placeholder_color,
    // font tooltips settings
    font_tooltip_color: default_globals.font_secondary_color,
    // font dropdown settings
    font_option_color: default_globals.font_primary_color,
    font_option_active: default_colors.primary,
    font_option_family: default_globals.primary_font,
    font_option_size: default_globals.font_size,
    font_option_hover: default_colors.secondary,
    // font variants settings
    font_light_color: default_globals.font_secondary_color,
    font_dark_color: default_globals.font_primary_color,
    // font accordion settings
    font_accordion_family: default_globals.primary_font,
    font_accordion_size: default_globals.font_size,
    font_accordion_color: default_globals.font_primary_color,
    font_accordion_hover: default_colors.secondary,
    font_accordion_transform: 'none',
    font_accordion_weight: 500,
    // font table settings
    font_table_family: default_globals.primary_font,
    font_table_size: default_globals.font_size,
    font_table_color: default_globals.font_primary_color,
    font_table_weight: 500,
    font_table_transform: 'none',
    font_header_hover: default_colors.secondary,
    // font tabs settings
    font_tab_color: '#fff',
    font_snackbar_color: '#fff',
    ...fonts
  }

  const default_backgrounds = {
    background_tooltip: '#2e3440',
    background_input_disabled: '#f5f5f5',
    background_option_hover: 'rgba(0, 0, 0, 0.05)',
    background_option_selected: 'rgba(0, 0, 0, 0.03)',
    background_option_active: 'rgba(0, 0, 0, 0.05)',
    background_accordion: '#fff',
    background_header: '#f7f8f9',
    background_row_striped: '#f7f8f9',
    background_row_hover: '#e4edf9',
    background_modal: '#fff',
    background_tab: 'rgba(25, 118, 210, 0.8)',
    background_progress: '#f8f9fe',
    background_progress_bar: default_colors.primary,
    background_calendar: '#fff',
    background_snackbar: default_colors.primary,
    ...backgrounds
  }
  const default_borders = {
    border_input: `1px solid ${default_globals.border_color}`,
    border_input_focus: `1px solid ${default_globals.active_color}`,
    border_input_disabled: `1px solid ${default_globals.border_color}`,
    border_tooltip: '1px solid #383838',
    border_select: `1px solid ${default_globals.active_color}`,
    border_accordion: `1px solid ${default_globals.border_color}`,
    border_tab: '#4a84d1',
    border_modal: `1px solid ${default_globals.border_color}`,
    border_calendar: `1px solid ${default_globals.border_color}`,
    ...borders
  }
  const default_labels = {
    font_label_family: default_fonts.font_label_family,
    font_label_size: default_fonts.font_label_size,
    font_label_transform: default_fonts.font_label_transform,
    font_label_weight: default_fonts.font_label_weight,
    font_label_color: default_fonts.font_label_color,
    ...labels
  }
  const default_tooltips = {
    background_tooltip: default_backgrounds.background_tooltip,
    font_tooltip_color: default_fonts.font_tooltip_color,
    border_tooltip: default_borders.border_tooltip,
    ...tooltips
  }
  const default_buttons = {
    font_button_family: default_fonts.font_button_family,
    font_button_size: default_fonts.font_button_size,
    font_button_transform: default_fonts.font_button_transform,
    font_button_weight: default_fonts.font_button_weight,
    ...buttons
  }
  const default_inputs = {
    font_input_family: default_fonts.font_input_family,
    font_input_size: default_fonts.font_input_size,
    font_input_transform: default_fonts.font_input_transform,
    font_input_weight: default_fonts.font_input_weight,
    font_input_color: default_fonts.font_input_color,
    font_input_placeholder: default_fonts.font_input_placeholder,
    font_input_focus: default_fonts.font_input_focus,
    font_input_hover: default_fonts.font_input_hover,
    border_input: default_borders.border_input,
    border_input_focus: default_borders.border_input_focus,
    border_input_disabled: default_borders.border_input_disabled,
    background_input_disabled: default_backgrounds.background_input_disabled,
    ...default_tooltips,
    ...default_labels,
    ...inputs
  }

  const default_dropdowns = {
    border_select: default_borders.border_select,
    font_option_color: default_fonts.font_option_color,
    font_option_active: default_fonts.font_option_active,
    font_option_family: default_fonts.font_option_family,
    font_option_size: default_fonts.font_option_size,
    font_option_hover: default_fonts.font_option_hover,
    background_option_hover: default_backgrounds.background_option_hover,
    background_option_selected: default_backgrounds.background_option_selected,
    background_option_active: default_backgrounds.background_option_active,
    ...default_inputs,
    ...dropdowns
  }
  const default_switches = {
    switch_on: default_globals.switch_on,
    switch_handle: default_globals.switch_handle,
    switch_off: default_globals.switch_off,
    switch_off_handle: default_globals.switch_off_handle,
    font_light_color: default_fonts.font_light_color,
    font_dark_color: default_fonts.font_dark_color,
    ...default_labels,
    ...switches
  }
  const default_accordions = {
    font_accordion_family: default_fonts.font_accordion_family,
    font_accordion_size: default_fonts.font_accordion_size,
    font_accordion_color: default_globals.font_primary_color,
    font_accordion_hover: default_colors.primary,
    font_accordion_transform: default_fonts.font_accordion_transform,
    font_accordion_weight: default_fonts.font_accordion_weight,
    border_accordion: default_borders.border_accordion,
    background_accordion: default_backgrounds.background_accordion,
    ...accordions
  }

  const default_tables = {
    border_table_color: default_globals.border_color,
    background_header: default_backgrounds.background_header,
    font_header_hover: default_fonts.font_header_hover,
    font_table_family: default_fonts.font_table_family,
    font_table_size: default_fonts.font_table_size,
    font_table_color: default_fonts.font_table_color,
    font_table_weight: default_fonts.font_table_weight,
    font_table_transform: default_fonts.font_table_transform,
    background_row_striped: default_backgrounds.background_row_striped,
    background_row_hover: default_backgrounds.background_row_hover,
    ...default_buttons,
    ...tables
  }

  const default_tabs = {
    tab_height: '48px',
    background_tab: default_backgrounds.background_tab,
    border_tab: default_borders.border_tab,
    font_tab_color: default_fonts.font_tab_color,
    ...tabs
  }

  const default_modal = {
    background_modal: default_backgrounds.background_modal,
    border_modal: default_borders.border_modal,
    modal_close_color: default_colors.primary,
    ...modal
  }

  const default_snackbar = {
    background_snackbar: default_backgrounds.background_snackbar,
    font_snackbar_color: default_fonts.font_snackbar_color,
    snackbar_action_color: default_colors.secondary,
    ...snackbar
  }

  const default_progress = {
    background_progress: default_backgrounds.background_progress,
    background_progress_bar: default_backgrounds.background_progress_bar,
    ...progress
  }

  const default_wizard = {
    ...default_buttons,
    ...default_progress,
    ...wizard
  }

  const default_calendar = {
    calendar_primary: default_colors.primary,
    calendar_secondary: default_colors.secondary,
    ...calendar
  }
  return {
    colors: default_colors,
    fonts: default_fonts,
    labels: default_labels,
    buttons: default_buttons,
    dropdowns: default_dropdowns,
    inputs: default_inputs,
    tooltips: default_tooltips,
    switches: default_switches,
    accordions: default_accordions,
    tables: default_tables,
    tabs: default_tabs,
    modal: default_modal,
    wizard: default_wizard,
    progress: default_progress,
    calendar: default_calendar,
    snackbar: default_snackbar
  }
}
