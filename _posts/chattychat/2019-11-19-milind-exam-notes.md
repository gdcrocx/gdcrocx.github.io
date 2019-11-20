# Wireshark PCAP Analysis

### Find your IP address 
    - Look for 255.255.255.255 in the Destination IP and the Source IP is #Your IP
> ip.dst_host == 255.255.255.255

### Find your hostname
    - Filter with dhcp and the src.ip is your IP
> dhcp && ip.src_host == 192.168.110.130
    - Look for Option 12 (hostname) in the DHCP section of the packet

### Find your OS Info

    - Filter with http and the src.ip is your IP
> http && ip.src_host == 192.168.110.130
    - look for User-Agent in the HTTP section of the packet

### Find suspicious domains

    - File >> Export Objects >> HTTP
    - Find a suspicious IP
    - Filter with ip.addr == 31.44.33.11

### For UTC timestamps

    - Right click on the Column Header "Time"
    - Navigate to Column Preferences
    - Change value for Time from "Time (format as specified)" to UTC Date and Time
    - Report the time of initial traffic to our host    

### Story Format

What, when, who, how, story

### Story 

A suspicious file named H7mp was downloaded onto our Windows NT 6.1 host "192.168.110.130" at 2019-10-12 15:02:45 UTC Time from a suspicious domain 31.44.33.11


# Autopsy

### Unzip 7zip files

> p7zip -d filename.7z

### Get OS Hostname

Results >> Operating System Information

# Volatility

Run imageinfo to retrieve information about the .vmem file
> volatility -f filename.vmem imageinfo

Run psxview to return all the processes that are running in memory
> volatility -f filename.vmem --profile=Win7SP1x64 psxview

Run the command that returns True for all rows
> volatility -f filename.vmem --profile=Win7SP1x64 psscan

Add "> filename.log" to write the output as CSV file
> volatility -f filename.vmem --profile=Win7SP1x64 psscan **> psscan.log**

Filter the output file for selective text i.e. process-id 1484
> cat psscan.log | grep <pid>

Add "> filename.csv>" to write the output as CSV file
> volatility -f filename.vmem --profile=Win7SP1x64 psscan **> psscan.csv**

Open CSV file in Microsoft Excel

> File > Data > Text to Columns > Delimited > Next > Space > Finish
