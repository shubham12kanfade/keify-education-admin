import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import {FaCloudUploadAlt} from 'react-icons/fa';
import {BiUpload} from 'react-icons/bi';
import {AiOutlineSelect} from 'react-icons/ai';
import './DragUpload.css';

const LeftInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
  // const text = files.length > 0 ? 'Add more files' : 'Choose files'

  return (
    <label style={{ backgroundColor: 'lightgray', color: 'gray', cursor: 'pointer', padding: 15, borderRadius: 3, height: 10, width: 70 }}>
      <div style = {{display:'flex'}}>
        <AiOutlineSelect style = {{fontSize: '18px', marginTop: '-2px'}} />
        <p style = {{fontSize: '17px', marginTop: '-3px', }}>Select</p>
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        accept={accept}
        multiple
        onChange={e => {
          getFilesFromEvent(e).then(chosenFiles => {
            onFiles(chosenFiles)
          })
        }}
      />
    </label>
  )
}

const RightInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
  // const text = files.length > 0 ? 'Add more files' : 'Choose files'

  return (
    <label style={{ backgroundColor: '#4B0082', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3, height: 10, width: 70 }}>
      <div style = {{display:'flex'}}>
        <BiUpload style = {{fontSize: '25px', marginTop: '-7px'}} />
        <p style = {{fontSize: '17px', marginTop: '-3px', }}>Upload</p>
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        accept={accept}
        multiple
        onChange={e => {
          getFilesFromEvent(e).then(chosenFiles => {
            onFiles(chosenFiles)
          })
        }}
      />
    </label>
  )
}

function DragUpload({width, text, subtext}) {
  const toast = (innerHTML) => {
    const el = document.getElementById('toast')
    el.innerHTML = innerHTML
    el.className = 'show'
    setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
  }

  const getUploadParams = () => {
    return { url: '' }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      toast(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, upload failed...`)
    }
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const getFilesFromEvent = e => {
    return new Promise(resolve => {
      getDroppedOrSelectedFiles(e).then(chosenFiles => {
        resolve(chosenFiles.map(f => f.fileObject))
      })
    })
  }

  const dropZoneContent = () => {
    return (
      <div style = {{display: 'flex'}}>
        <FaCloudUploadAlt style = {{color: 'gray', fontSize: '35px', }} /> 
        <span style = {{color: 'gray', fontSize: '20px', marginLeft: '2px', marginTop: '10px'}}>Drop files here</span>
      </div>
    )
  }
  
  return (
    <React.Fragment>
      <div style = {{}}>
        <p className = 'heading'>{text}</p>
        <p className = 'subHeader'>{subtext}</p>
        <div style = {{
          border: '1px solid gray', 
          borderStyle: 'dashed',
          margin: '8px',
        }}>
          <div style = {{display: 'flex'}}>
            {/* {() => {setText('')}} */}
            <Dropzone 
              accept="image/*,audio/*,video/*,.pdf"
              onSubmit={handleSubmit}
              InputComponent={LeftInput}
              getFilesFromEvent={getFilesFromEvent}
              getUploadParams={getUploadParams}  
              styles={{
                dropzone: { 
                  // visibility: 'hidden',
                  // display: 'none',
                  overflow: 'hidden', 
                  // width: width, 
                  height: 1, 
                  width: 125,
                  border: 'none',
                  marginRight: 'auto', 
                  marginLeft: 0,
                  marginTop: '10px',
                  // border: '1px solid gray', 
                  // margin: '8px',
                  // borderStyle: 'dashed'
                },
                dropzoneActive: { borderColor: 'green' },
              }}    
            />
            <Dropzone 
            accept="image/*,audio/*,video/*,.pdf"
            onSubmit={handleSubmit}
            InputComponent={RightInput}
            getFilesFromEvent={getFilesFromEvent}
            getUploadParams={getUploadParams}  
            styles={{
              dropzone: { 
                // visibility: 'hidden',
                // display: 'none',
                overflow: 'hidden', 
                border: 'none',
                // width: width, 
                marginLeft: 'auto', 
                marginRight: 0,
                marginTop: '10px',
                height: 1, 
                width: 125,
                // border: '1px solid gray', 
                // margin: '8px',
                // borderStyle: 'dashed'
              },
              dropzoneActive: { borderColor: 'green' },
            }}    
          />
          </div>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            inputContent= {dropZoneContent}
            styles={{
              dropzone: { 
                overflow: 'hidden', 
                width: width, 
                height: 150, 
                marginTop: '-120px',
                border: 'none',
                // border: '1px solid gray', 
                // margin: '8px',
                // borderStyle: 'dashed'
              },
              dropzoneActive: { borderColor: 'green' },
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default DragUpload;