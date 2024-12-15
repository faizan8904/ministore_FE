import React from 'react'

function ErrorAlert({errMessage}) {
  return (
    <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4 absolute top-15 left-1/2 transform -translate-x-1/2">
    <strong className="block font-medium text-red-800"> {errMessage.title} </strong>
    <p className="mt-2 text-sm text-red-700">
        {errMessage.msg}
    </p>
</div>
  )
}

export default ErrorAlert
