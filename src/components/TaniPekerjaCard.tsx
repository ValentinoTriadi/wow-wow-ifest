import Link from "next/link"

const harvests = [
    { id: 1, type: 'TERNAK SAPI', location: 'Jatinangor', owner: 'Sumarno', image: '/article/buah.jpg' },
    { id: 2, type: 'PERTANIAN UBI', location: 'Sumedang', owner: 'Wahyu', image: '/myHarvest/taniubi.jpg' },
    // Add more harvests here
  ]
  
  const TaniPekerjaCard = () => {
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
            </Link>
          </div>
        ))}
      </div>
    )
  }
  
  export default TaniPekerjaCard