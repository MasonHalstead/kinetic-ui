import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../labels/Label'
import { Button } from '../buttons/Button'
import { DropzoneElement } from './elements'
import { useTheme } from '../theme/ThemeProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from './Dropzone.module.scss'

export const Dropzone = ({
  onDrop,
  onClick,
  icon,
  accept,
  button_variant,
  button_external,
  button_upload,
  message,
  label,
  disabled,
  height,
  transparent,
  background,
  theme,
  margin,
  width
}) => {
  const inputRef = useRef()

  const [file_names, setFileNames] = useState(null)

  const uploadFiles = () => {
    inputRef.current.click()
  }
  const stopEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const onDragOver = (e) => {
    stopEvent(e)
  }

  const onDragLeave = (e) => {
    stopEvent(e)
  }

  const onDropFile = (e) => {
    stopEvent(e)
    const { files } = e.dataTransfer
    handleFiles(files)
  }

  const addFiles = (e) => {
    const { files } = e.target
    stopEvent(e)

    handleFiles(files)
  }

  const filesToArray = (list) => {
    const result = []
    for (let i = 0; i < list.length; i += 1) {
      result.push(list.item(i))
    }
    return result
  }

  const handleFiles = async (files) => {
    const list = await filesToArray(files)
    if (list.length === 0) {
      return
    }
    const names = list.map((l) => l.name).join(', ')
    setFileNames(names)
    onDrop(list)
  }

  const dropzone = useTheme('dropzone', theme)

  return (
    <div
      className={cn.wrapper}
      color={dropzone.font_dropzone_placeholder}
      style={{
        margin,
        width,
        fontFamily: dropzone.font_dropzone_family,
        textTransform: dropzone.font_dropzone_transform,
        fontWeight: dropzone.font_dropzone_weight,
        fontSize: dropzone.font_dropzone_size,
        color: dropzone.font_dropzone_color
      }}
    >
      {label && (
        <div className={cn.custom}>
          <Label label={label} theme={dropzone} />
        </div>
      )}
      <DropzoneElement
        className={cn.dropzone}
        transparent={transparent}
        background={background}
        disabled={disabled}
        theme={dropzone}
        onDrop={onDropFile}
        onClick={uploadFiles}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        style={{ minHeight: 150, height }}
      >
        {icon && (
          <div className={cn.icon}>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <p>{file_names || message}</p>
        <div className={cn.buttons}>
          {onClick && (
            <Button
              onClick={(e) => {
                stopEvent(e)
                onClick()
              }}
              variant={button_variant}
              button_size='small'
              margin='5px 8px 0px 5px'
              disabled={disabled}
              outline
            >
              {button_external}
            </Button>
          )}
          <Button
            variant={button_variant}
            button_size='small'
            disabled={disabled}
            margin='5px 8px 0px 5px'
          >
            {button_upload}
          </Button>
        </div>
        <input
          className={cn.input}
          ref={inputRef}
          type='file'
          accept={accept}
          multiple
          disabled={disabled}
          onChange={addFiles}
        />
      </DropzoneElement>
    </div>
  )
}

Dropzone.defaultProps = {
  icon: ['far', 'file-alt'],
  label: null,
  message: 'Drag & drop documents here',
  button_external: 'Import documents',
  button_upload: 'Upload documents',
  button_variant: 'secondary',
  transparent: false,
  margin: 0,
  background: null,
  width: '100%',
  height: 200,
  accept: '',
  disabled: false,
  theme: {},
  onClick: null,
  onDrop: () => {}
}

Dropzone.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  button_variant: PropTypes.string,
  transparent: PropTypes.bool,
  message: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.number,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  button_external: PropTypes.string,
  button_upload: PropTypes.string,
  theme: PropTypes.object,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onDrop: PropTypes.func
}
