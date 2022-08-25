const Error = ({children}) => {
  return (
    <div className="text-white bg-red-500 text-center p-3 font-semibold mb-3 rounded-md">
        {children}
    </div>
  )
}

export default Error