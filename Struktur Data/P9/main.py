class Queue:

    def __init__(self):
        self.queue = []

    def isEmpty(self):
        if(len(self.queue) == 0):
            print("Antrian Masi kosong")
            return self.queue
        else:
            print("Antrian Terisi")
            return self.queue

    def get_queue(self):
        if(len(self.queue) == 0):
            return self.queue
        else:
            print("\nAntrian")
            return self.queue
            

    def enqueue(self, item):
        print("Menambahkan nilai", item)
        return self.queue.append(item)
        

    def dequeueu(self):
        if (len(self.queue) == 0):
            print("Tidak ada yang bisa dihapus")
            return self.queue
        else:
            return self.queue.pop(0)
            

queue = Queue()
print('='*50)

print(queue.isEmpty())

print('\n')
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
print(queue.get_queue())

print("\nMenghapus nilai")
print(queue.dequeueu())
print(queue.get_queue())

## MENAMBAHKAN NILAI
print('\n')
queue.enqueue("A")
print(queue.get_queue())


print('='*50)