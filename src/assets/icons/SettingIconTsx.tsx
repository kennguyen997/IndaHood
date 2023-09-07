import React from 'react';

const SettingIconTsx = ({ size }: { size: number }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9993 16.3337C15.288 16.3337 16.3327 15.289 16.3327 14.0003C16.3327 12.7117 15.288 11.667 13.9993 11.667C12.7107 11.667 11.666 12.7117 11.666 14.0003C11.666 15.289 12.7107 16.3337 13.9993 16.3337Z"
          stroke="#BDC5CB"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0636 16.8636C20.9366 17.1515 20.8987 17.4709 20.9548 17.7806C21.011 18.0902 21.1586 18.3759 21.3786 18.6009L21.4359 18.6582C21.6134 18.8355 21.7542 19.046 21.8503 19.2778C21.9464 19.5096 21.9958 19.758 21.9958 20.0089C21.9958 20.2597 21.9464 20.5082 21.8503 20.7399C21.7542 20.9717 21.6134 21.1822 21.4359 21.3595C21.2586 21.537 21.0481 21.6779 20.8163 21.7739C20.5845 21.87 20.3361 21.9195 20.0852 21.9195C19.8343 21.9195 19.5859 21.87 19.3542 21.7739C19.1224 21.6779 18.9118 21.537 18.7345 21.3595L18.6773 21.3023C18.4523 21.0822 18.1666 20.9346 17.8569 20.8785C17.5473 20.8223 17.2279 20.8602 16.94 20.9873C16.6577 21.1083 16.4169 21.3092 16.2473 21.5653C16.0777 21.8214 15.9867 22.1215 15.9855 22.4286V22.5909C15.9855 23.0972 15.7843 23.5828 15.4263 23.9408C15.0683 24.2989 14.5827 24.5 14.0764 24.5C13.57 24.5 13.0845 24.2989 12.7264 23.9408C12.3684 23.5828 12.1673 23.0972 12.1673 22.5909V22.505C12.1599 22.1891 12.0576 21.8826 11.8738 21.6256C11.6899 21.3685 11.433 21.1727 11.1364 21.0636C10.8485 20.9366 10.5291 20.8987 10.2194 20.9548C9.90979 21.011 9.62406 21.1586 9.39909 21.3786L9.34182 21.4359C9.16451 21.6134 8.95396 21.7542 8.7222 21.8503C8.49044 21.9464 8.24202 21.9958 7.99114 21.9958C7.74025 21.9958 7.49183 21.9464 7.26007 21.8503C7.02831 21.7542 6.81776 21.6134 6.64045 21.4359C6.46295 21.2586 6.32214 21.0481 6.22607 20.8163C6.12999 20.5845 6.08054 20.3361 6.08054 20.0852C6.08054 19.8343 6.12999 19.5859 6.22607 19.3542C6.32214 19.1224 6.46295 18.9118 6.64045 18.7345L6.69773 18.6773C6.91779 18.4523 7.0654 18.1666 7.12155 17.8569C7.17769 17.5473 7.13979 17.2279 7.01273 16.94C6.89173 16.6577 6.69081 16.4169 6.43472 16.2473C6.17862 16.0777 5.87852 15.9867 5.57136 15.9855H5.40909C4.90277 15.9855 4.41718 15.7843 4.05916 15.4263C3.70114 15.0683 3.5 14.5827 3.5 14.0764C3.5 13.57 3.70114 13.0845 4.05916 12.7264C4.41718 12.3684 4.90277 12.1673 5.40909 12.1673H5.495C5.81095 12.1599 6.11737 12.0576 6.37442 11.8738C6.63148 11.6899 6.82727 11.433 6.93636 11.1364C7.06343 10.8485 7.10133 10.5291 7.04519 10.2194C6.98904 9.90979 6.84142 9.62406 6.62136 9.39909L6.56409 9.34182C6.38659 9.16451 6.24578 8.95396 6.1497 8.7222C6.05363 8.49044 6.00418 8.24202 6.00418 7.99114C6.00418 7.74025 6.05363 7.49183 6.1497 7.26007C6.24578 7.02831 6.38659 6.81776 6.56409 6.64045C6.74139 6.46295 6.95194 6.32214 7.1837 6.22607C7.41546 6.12999 7.66389 6.08054 7.91477 6.08054C8.16566 6.08054 8.41408 6.12999 8.64584 6.22607C8.8776 6.32214 9.08815 6.46295 9.26545 6.64045L9.32273 6.69773C9.54769 6.91779 9.83342 7.0654 10.1431 7.12155C10.4527 7.17769 10.7721 7.13979 11.06 7.01273H11.1364C11.4187 6.89173 11.6595 6.69081 11.8291 6.43472C11.9987 6.17862 12.0897 5.87852 12.0909 5.57136V5.40909C12.0909 4.90277 12.292 4.41718 12.6501 4.05916C13.0081 3.70114 13.4937 3.5 14 3.5C14.5063 3.5 14.9919 3.70114 15.3499 4.05916C15.708 4.41718 15.9091 4.90277 15.9091 5.40909V5.495C15.9103 5.80216 16.0013 6.10226 16.1709 6.35835C16.3405 6.61445 16.5813 6.81536 16.8636 6.93636C17.1515 7.06343 17.4709 7.10133 17.7806 7.04519C18.0902 6.98904 18.3759 6.84142 18.6009 6.62136L18.6582 6.56409C18.8355 6.38659 19.046 6.24578 19.2778 6.1497C19.5096 6.05363 19.758 6.00418 20.0089 6.00418C20.2597 6.00418 20.5082 6.05363 20.7399 6.1497C20.9717 6.24578 21.1822 6.38659 21.3595 6.56409C21.537 6.74139 21.6779 6.95194 21.7739 7.1837C21.87 7.41546 21.9195 7.66389 21.9195 7.91477C21.9195 8.16566 21.87 8.41408 21.7739 8.64584C21.6779 8.8776 21.537 9.08815 21.3595 9.26545L21.3023 9.32273C21.0822 9.54769 20.9346 9.83342 20.8785 10.1431C20.8223 10.4527 20.8602 10.7721 20.9873 11.06V11.1364C21.1083 11.4187 21.3092 11.6595 21.5653 11.8291C21.8214 11.9987 22.1215 12.0897 22.4286 12.0909H22.5909C23.0972 12.0909 23.5828 12.292 23.9408 12.6501C24.2989 13.0081 24.5 13.4937 24.5 14C24.5 14.5063 24.2989 14.9919 23.9408 15.3499C23.5828 15.708 23.0972 15.9091 22.5909 15.9091H22.505C22.1978 15.9103 21.8977 16.0013 21.6416 16.1709C21.3856 16.3405 21.1846 16.5813 21.0636 16.8636V16.8636Z"
          stroke="#BDC5CB"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default SettingIconTsx;
