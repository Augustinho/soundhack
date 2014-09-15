



def collect_frequency(self):
if self.currentSec == 0:
self.currentSec = int(time.time())
if time.time() < (self.currentSec + self.freq_window):
self.frequency += 1
else:
self.__update_window(self.frequency)
self.frequency = 1
self.currentSec = int(time.time())