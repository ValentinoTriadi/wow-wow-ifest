import Link from "next/link"

const harvests = [
    { id: 1, type: 'TERNAK SAPI', location: 'Jatinangor', owner: 'Sumarno', image: '/myHarvest/ternaksapi.jpg' },
    // Add more harvests here
  ]
  
  const TernakBibitCard = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
        {harvests.map((harvest) => (
          <div key={harvest.id} className="bg-white p-4 rounded shadow-md">
            <Link href={`/detailHarvest/${harvest.id}`}>
              <img src={harvest.image} alt={harvest.type} className="w-full h-32 object-cover rounded mb-2" />
              <h4 className="text-lg font-semibold">{harvest.type}</h4>
              <div className="flex gap-2 items-center b-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                <p className="text-sm text-gray-600">{harvest.location}</p>
              </div>
              <div className="flex gap-2 items-center b-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M31.414 12.714L30 8c0-1.105-2.988-2-6-2s-6 .895-6 2l-1.414 4.714C13.21 13.436 11 14.639 11 16c0 2.21 5.82 4 13 4s13-1.79 13-4c0-1.361-2.21-2.564-5.586-3.286m-3.282-3.98a4 
              4 0 0 0-.616-.245C26.623 8.202 25.335 8 24 8s-2.623.202-3.516.49c-.282.09-.483.176-.616.244l-.731 2.437q.294.041.667.086a36.3 36.3 0 0 0 9.06-.086zm1.312 4.374a32 32 0 0 1-1.015.135a38.3 38.3 0 0 1-8.858 0a31 31 0 0 1-1.015-.135l-.395 1.314l-1.157.248c-1.584.338-2.756.764-3.48 1.18a4 4 0 0 0-.24.15c.42.283 
              1.113.61 2.112.917C17.51 17.567 20.552 18 24 18s6.49-.433 8.604-1.083c.999-.307 1.692-.634 2.112-.918a4 4 0 0 0-.24-.148c-.724-.417-1.896-.843-3.48-1.181l-1.157-.248zm5.619 3.185l-.007-.011zm-.003-.579l.011-.016l-.01.016m-22.131-.016l.01.016q-.011-.015-.01-.016m.008.595l.007-.011l-.002.004zm6.742-7.445l-.012.01l.016-.014zm8.638-.004l.017.014q-.002 0-.017-.014" 
              clip-rule="evenodd"/><path d="M16.002 19.154a8 8 0 0 0 15.997 0a27 27 0 0 1-2.024.4a6 6 0 0 1-11.95 0a27 27 0 0 1-2.023-.4"/><path fill-rule="evenodd" d="M13.83 42c.11-.313.17-.65.17-1v-1h20v-3h-3.65l-.177.059c-.336.108-.81.249-1.401.388A21 21 0 0 1 24 38c-1.938 0-3.594-.276-4.771-.553A18 18 0 0 1 17.65 37h-2.333a6 6 0 0 0 1.88-2H18v-5.586A47 47 0 0 1 24 29c6.008 
              0 18 1.583 18 7v6zm25.005-7.777C39.752 34.908 40 35.494 40 36v4h-4v-4a1 1 0 0 0-1-1v-2.521c1.632.49 2.949 1.082 3.835 1.744M30 31.433c1.003.138 2.017.314 3 .53V35h-3zM24 31a44 44 0 0 1 4 .2v4.37a19 19 0 0 1-4 .43a19 19 0 0 1-4-.43V31.2c1.467-.138 2.848-.2 4-.2" clip-rule="evenodd"/><path d="M8 25a1 1 0 1 0-2 0v7a4 4 0 0 0 4 4v5a1 1 0 1 0 2 0v-5a4 4 0 0 0 4-4v-7a1 
              1 0 1 0-2 0v7a2 2 0 0 1-2 2v-9a1 1 0 1 0-2 0v9a2 2 0 0 1-2-2z"/></g></svg>
                <p className="text-sm text-gray-600">{harvest.owner}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
  
  export default TernakBibitCard