import { lazy } from 'react';

export const InstallationPage = lazy(() => import('pages/starting/InstallationPage'));
export const ThemePage = lazy(() => import('pages/starting/ThemePage'));
export const ButtonsPage = lazy(() => import('pages/buttons/ButtonsPage'));
export const DropdownsPage = lazy(() => import('pages/dropdowns/DropdownsPage'));
export const ModalsPage = lazy(() => import('pages/modals/ModalsPage'));
export const ModalsWizardPage = lazy(() => import('pages/modals/ModalsWizardPage'));
export const InputsPage = lazy(() => import('pages/inputs/InputsPage'));
export const TablesPage = lazy(() => import('pages/tables/TablesPage'));
export const TablesAccordionPage = lazy(() => import('pages/tables/TablesAccordionPage'));
export const ErrorPage = lazy(() => import('pages/error/ErrorPage'));
